'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import api from '@/lib/api';
import { toast } from 'react-toastify';

interface CheckoutFormProps {
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  totalAmount: number;
  onSuccess: () => void;
}

export default function CheckoutForm({
  shippingAddress,
  totalAmount,
  onSuccess,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        toast.error(submitError.message);
        setLoading(false);
        return;
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/orders`,
        },
        redirect: 'if_required',
      });

      if (error) {
        toast.error(error.message || 'Payment failed');
        setLoading(false);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // Create order
        try {
          await api.post('/orders', {
            shippingAddress,
            paymentIntentId: paymentIntent.id,
          });
          toast.success('Order placed successfully!');
          onSuccess();
        } catch (orderError: any) {
          toast.error('Order creation failed');
          console.error(orderError);
        }
      }
    } catch (err: any) {
      toast.error('Payment processing failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-primary-600 hover:bg-primary-500 text-white py-3 rounded-lg font-semibold transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed magnetic"
      >
        {loading ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
      </button>
    </form>
  );
}

