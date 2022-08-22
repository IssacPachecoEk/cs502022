import welcome from '@/utils/welcome';
Promise.all([import('@/Root'), import('@/App')]).then(([{ default: render }, { default: App }]) => {
  render(App);
});
welcome();
export {};
