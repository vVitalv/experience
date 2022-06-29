export default function useRotate(mouseX, mouseY) {
  const width = document.body.clientWidth
  const height = document.body.clientHeight
  const rotateX =
    mouseY < height / 2
      ? Math.round((mouseY / height) * 10)
      : Math.round(-(1 - mouseY / height) * 10)
  const rotateY =
    mouseX < width / 2
      ? Math.round(-(mouseX / width) * 5)
      : Math.round((1 - mouseX / width) * 5)
  return [rotateX, rotateY]
}
