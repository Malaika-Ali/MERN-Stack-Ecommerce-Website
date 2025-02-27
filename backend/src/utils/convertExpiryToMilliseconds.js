const convertExpiryToMilliseconds = (expiry) => {
    const unit = expiry.slice(-1); // Get the last character (e.g., 'd' for days)
    const value = parseInt(expiry.slice(0, -1)); // Get the numeric value (e.g., 7)
  
    switch (unit) {
      case 's': // seconds
        return value * 1000;
      case 'm': // minutes
        return value * 60 * 1000;
      case 'h': // hours
        return value * 60 * 60 * 1000;
      case 'd': // days
        return value * 24 * 60 * 60 * 1000;
      default:
        throw new Error('Invalid expiry format. Use s, m, h, or d.');
    }
  };