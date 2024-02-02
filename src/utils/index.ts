export function debounce(
  func: (...args: any[]) => void,
  delay?: number
): (...args: any[]) => void {
  let timerId: NodeJS.Timeout;

  return function (...args: any[]) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(...args);
    }, delay ?? 300);
  };
}

export function isArray(value: any) {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
