/*
 * @Author 舜君
 * @LastEditTime 2021-10-15 14:38:30
 * @Description
 */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#regular-exception").addEventListener("click", () => {
    throw new Error(`Regular exception no. ${Date.now()}`);
  });
});
