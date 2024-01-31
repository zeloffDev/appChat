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
