import sharp from 'sharp';
import { checkdir } from './imgAvailability';
/// some messages to guide me in cbackend console
const inputSucc =
  'this imgAvliablitiy func say : orgin image avilable 😀😀😀😀==>> step (2) VAlide Done';
const inputErr =
  'here it is imageAvilable func:no such file or directory ==>> step (2) UNVAlide';
const outputSucc =
  'this imgAvliablitiy func say :this thumnail aleardy exite befor "and i will get that customize image fom cach 🏃🏃🏃🏃🏃🏃🏃 ==>> step (3) ***FROM CACH*** Done';
const outputErr = 'wait to create ur file ==>> step (3) VAlide Done';

type imageesize = {
  inputPath: string;
  outputPath: string;
  width: number | null;
  height: number | null;
  thumbnail: boolean;
  oringimage: boolean;
  outputDir: string;
};

const resizeImage = async (
  mkImg: imageesize
): Promise<sharp.OutputInfo | void | string> => {
  // async function that the main function will processe our image and make uesr's customize images
  try {
    if (!mkImg.oringimage) {
      // if full image not there stop here and return error
      console.log(inputErr);
      //response.status(404).send(inputErr);
    } else {
      console.log(inputSucc);
      if (!mkImg.thumbnail) {
        // if custoize image that user want it exsite before then go to next step to create new thumbnail
        checkdir(mkImg.outputDir); // befor create new thumbnail check first if the container folder of thumbnails,if not create folder

        const transform = await sharp(mkImg.inputPath) /// main function SHARP that the core to create new thumbnail // full image path that we want customize it
          .resize(mkImg.width, mkImg.height) // resize image as qury requste param
          //.toFormat('jpg')
          .toFile(mkImg.outputPath); // finall step to product our thumbnail to store it in oure storage
        console.log(outputErr);
        console.log('gtting iamge from storage done');
        return transform;
      } else {
        console.log(outputSucc); // message  guide me in console tell me that func successfully done
        console.log('gtting iamge from storage done');
        return mkImg.outputPath;
      }
    }
  } catch (error) {
    console.log(error);
    console.log('sharp proccess func did not work ');
  }
};

export default resizeImage;
