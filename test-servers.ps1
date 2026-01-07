Write-Host "`n=== LIQUOR STORE WEBSITE - SERVER TEST ===" -ForegroundColor Cyan
Write-Host ""

# Test Backend
Write-Host "Testing Backend Server (Port 5000)..." -ForegroundColor Yellow
try {
    $backend = Invoke-WebRequest -Uri "http://localhost:5000/api/products" -Method GET -TimeoutSec 3 -ErrorAction Stop
    Write-Host "✓ Backend is RUNNING and responding!" -ForegroundColor Green
    Write-Host "  Status: $($backend.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "✗ Backend is NOT responding" -ForegroundColor Red
    Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "  Possible issues:" -ForegroundColor Yellow
    Write-Host "    - MongoDB is not running" -ForegroundColor White
    Write-Host "    - Backend server crashed (check terminal)" -ForegroundColor White
    Write-Host "    - Port 5000 is blocked" -ForegroundColor White
}

Write-Host ""

# Test Frontend
Write-Host "Testing Frontend Server (Port 3000)..." -ForegroundColor Yellow
try {
    $frontend = Invoke-WebRequest -Uri "http://localhost:3000" -Method GET -TimeoutSec 3 -ErrorAction Stop
    Write-Host "✓ Frontend is RUNNING!" -ForegroundColor Green
    Write-Host "  Status: $($frontend.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "✗ Frontend is NOT responding" -ForegroundColor Red
    Write-Host "  Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "  Possible issues:" -ForegroundColor Yellow
    Write-Host "    - Frontend is still starting (wait 30 seconds)" -ForegroundColor White
    Write-Host "    - Port 3000 is blocked" -ForegroundColor White
    Write-Host "    - Check terminal for errors" -ForegroundColor White
}

Write-Host ""
Write-Host "=== ACCESS YOUR WEBSITE ===" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Green
Write-Host "Backend API: http://localhost:5000/api" -ForegroundColor Green
Write-Host ""
Write-Host "=== NEXT STEPS ===" -ForegroundColor Cyan
Write-Host "1. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host "2. If backend shows errors, make sure MongoDB is running" -ForegroundColor White
Write-Host "3. Create an admin user: cd backend && npm run create-admin" -ForegroundColor White
Write-Host ""

