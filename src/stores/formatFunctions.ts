export function formatNumber(value: any) {
    if (!isNaN(value)) {
      return parseFloat(value).toFixed(0);
    }
    return value;
  };