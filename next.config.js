const nextConfig = {
    async rewrites() {
      return [
        {
            source: '/api/sheets',
            destination: `https://script.google.com/macros/s/AKfycbygJwcU5rfQ1fLXklj75Y_N1vFeg1wpFn35m7A4hvxzNP6K-XS8siriotVNHj4iXG80sA/exec`,
        },
      ];
    }
  };
  
  export default nextConfig;