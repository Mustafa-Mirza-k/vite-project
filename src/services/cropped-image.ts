
export const CroppedImage = (url : string) => {
  let target = "media/"
  let indexOfTarget = url.indexOf(target) + target.length
  console.log(url.slice(0, indexOfTarget) + "/crop/600/400/" +  url.slice(indexOfTarget))
  return url.slice(0, indexOfTarget) + "crop/600/400/" +  url.slice(indexOfTarget)
}
