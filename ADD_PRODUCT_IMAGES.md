# How to Add Product Images

## Famous Bottles from Your Store

Based on your request, here are the famous bottles you mentioned:
- **Eagle Rare** (Aged 12 Years Kentucky Straight Bourbon)
- **Weller Antique 107** (Kentucky Straight Bourbon)

## Steps to Add Images

### Option 1: Upload via Admin Panel (Recommended)

1. **Login as Admin**: http://localhost:3000/admin/login
2. **Go to Admin Dashboard**: http://localhost:3000/admin
3. **Click "Add Product"**
4. **Fill in product details**:
   - Name: "Eagle Rare Aged 12 Years"
   - Category: "Whiskey"
   - Price: (your price)
   - Stock: (quantity)
   - Brand: "Eagle Rare"
   - Description: "Kentucky Straight Bourbon aged 12 years"
   - Volume: "750ml"
   - Alcohol Content: "45% ABV"
5. **Upload Image**: Click the image upload area and select your product image
6. **Click "Create Product"**

### Option 2: Add Images to Backend Folder

1. **Place images in**: `backend/uploads/` folder
2. **Name them appropriately**:
   - `eagle-rare.jpg` or `eagle-rare.png`
   - `weller-antique-107.jpg` or `weller-antique-107.png`
   - `wild-turkey.jpg`
   - `buffalo-trace.jpg`
   - `blanton.jpg`

3. **When creating products via API or Admin Panel**, the system will automatically use these images if the product name matches.

### Option 3: Update Existing Products

1. **Login as Admin**
2. **Go to Admin Dashboard**
3. **Find the product in the list**
4. **Click the Edit icon**
5. **Upload new image**
6. **Save changes**

## Image Requirements

- **Format**: JPG, PNG, GIF, or WebP
- **Size**: Maximum 5MB per image
- **Recommended Dimensions**: 800x1200px (portrait orientation for bottles)
- **Quality**: High resolution for best display

## Product Image Tips

- Use clear, well-lit photos
- Show the full bottle
- Include label details if possible
- Use consistent background (dark/neutral works best)
- Consider adding a glass with the product for premium look

## Automatic Image Mapping

The system will automatically try to match product names to images:
- Products with "Eagle Rare" in name → `/uploads/eagle-rare.jpg`
- Products with "Weller" in name → `/uploads/weller.jpg`
- Products with "Wild Turkey" in name → `/uploads/wild-turkey.jpg`
- Products with "Buffalo Trace" in name → `/uploads/buffalo-trace.jpg`
- Products with "Blanton" in name → `/uploads/blanton.jpg`

If no match is found, it will use a default placeholder.

## Testing

After adding images:
1. Visit: http://localhost:3000/products
2. Check that images display correctly
3. Verify hover effects work
4. Test on different screen sizes

## Example Product Data

```json
{
  "name": "Eagle Rare Aged 12 Years",
  "category": "Whiskey",
  "price": 89.99,
  "stock": 15,
  "brand": "Eagle Rare",
  "description": "Kentucky Straight Bourbon aged 12 years. Rich, complex flavors with notes of vanilla, caramel, and oak.",
  "volume": "750ml",
  "alcoholContent": "45% ABV",
  "image": "/uploads/eagle-rare.jpg"
}
```

