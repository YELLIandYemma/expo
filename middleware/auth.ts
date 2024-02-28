export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value && to.path === "/products") {
    return navigateTo("/login");
  } else if (user.value && to.path === "/login") {
    return navigateTo("/products");
  }
  if (!user.value && to.path === "/") {
    return navigateTo("/");
  }
});
