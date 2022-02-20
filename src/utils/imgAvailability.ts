import fs from 'fs';
import sharp from 'sharp';

type imgPes = {
  fileName: string;
  width: number | null;
  height: number | null;
  format?: string | keyof sharp.FormatEnum | sharp.AvailableFormatInfo;
};

//create thumbnail image name
//func that create customize thumbnail image equal to user requirements to use it with our paths when we need to check about thumbnail  or create one
// and it will make a name with original extension or extension that the user input it
export const thumbImg = (thumPes: imgPes): string => {
  // extract the only name of the full image without images extinctions
  const imgName: string = thumPes.fileName.split('.').slice(0, -1).join('.');
  const imgFormat: string | undefined = // will extract only  extinctions of full images without images name
    thumPes.fileName.split('.').at(-1) || 'jpg';
  return `${imgName}_${thumPes.width}_${thumPes.height}.${
    thumPes.format || imgFormat
  }`;
};

/// check thumbnail folder function if there continue.if not will create a thumbnail folder
export const checkdir = (pathhh: string): undefined | void => {
  try {
    fs.access(pathhh, (err) => {
      if (err) {
        fs.mkdirSync(pathhh);
        console.log('thumbnail folder not found and will create it .....done');
      }
    });
  } catch (error) {
    console.error(error);
  }
};

/// 3rd step check image direction and paths availability
/// func to take any path and check if this path exists or not ====>> we will use it with full image and a thumbnail image
export const imgAvailability = (filePath: string): boolean => {
  if (fs.existsSync(filePath)) {
    // if the path that in parameter exist return true if not return false
    return true;
  } else {
    return false;
  }
};

export default imgAvailability;
