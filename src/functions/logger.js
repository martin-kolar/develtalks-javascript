export default function(error, logProduction = false) {
  let production = (typeof Raven === 'object' ? true : false);

  if (production) {
    if (logProduction) {
      Raven.captureException(error);
    }
  }
  else {
    console.warn(error);
  }
}
