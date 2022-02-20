/// second step validation URL request

import { Response } from 'express';

const UrlValidation = (
  //function that will see if everything go good with (**requested URL endpoint**)
  fileName: string,
  width: number | null,
  height: number | null,
  res: Response
): Response | boolean => {
  if (!fileName) {
    // check if user make a request without the name of image return false and stop here
    console.log('please enter image name');
    res.status(404).json('please enter image name');
    return false;
  }
  if (!width && !height) {
    // that step mean user input valid name of the full image and here will see if there request with valid dimensions
    console.log('please enter width or height');
    res.status(404).json('please enter width or height');
    return false;
  }
  console.log('valid url'); // if that message showed up in console that means everything goes well with this func
  return true;
};

export default UrlValidation;
