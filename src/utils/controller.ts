import express from 'express';
import path from 'path';
import UrlValidation from '../middleware/urlvalid';
import imageAvailable, { thumbImg } from './imgAvailability';
import resizeImage from './resizeimg';

const imageResize = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  // frist step handel and extract req.query --================>>>>
  const { name, w, h, ext } = req.query;
  const fileName = name as string;
  const height: number | null = h ? parseInt(h as string, 10) : null;
  const width: number | null = w ? parseInt(w as string, 10) : null;
  const format: string = (ext as string) || 'jpg';

  // console.log(width); // console.log(height); // console.log(fileExt ); //console.log(fileName);

  try {
    // callback function that will see if everything go good with (**requested URL endpoint**)
    const urlValidation: unknown = UrlValidation(fileName, width, height, res); //if no error good go aheade next step

    // second step validation url request check if requested valid or not------====>>>
    if (urlValidation) {
      const thumbnailImage: string = thumbImg({
        // store func that create customize thumbnail image equal to user requirements in variable to use it with our paths when we need to check about thumbnail  or create one
        fileName,
        width,
        height,
        format,
      });

      //we need to create an input path to check (**original image & thumbnail images & thumbnail folder**) are available or not
      // make a Dir of the original or full image use it later to check if that full image path is there or not
      const inputPath: string | path.PlatformPath = path.join(
        __dirname,
        '..',
        '..',
        'images',
        fileName
      );
      // make a Dir of the thumbnail image that the user want to make like it  to use it later to check if that image file  there in our storage (**cach**) or not
      const outputPath: string | path.PlatformPath = path.join(
        __dirname,
        '..',
        '..',
        'images',
        'thumbnail',
        thumbnailImage
      );

      // make a Dir of the thumbnail folder use it later when we will create a thumbnail to check if that folder exists or not , and if not will create a thumbnail folder to be a container of thumbnail images files
      const outputDir: string | path.PlatformPath = path.join(
        __dirname,
        '..',
        '..',
        'images',
        'thumbnail'
      );

      /// 3rd step check image direction and path availability-------=========>>>>>>>>>
      /// (3-1)___frist check original image if it exist or not

      const oringimage = imageAvailable(inputPath); // callback func that check if full image exists or not

      /// (3-2)__ the second check if there (**thumbnail as the query. requested already exists)**
      //. check if there thumbnail as the query already exists to (**create thumbnail**) image to put it there
      const thumbnail = imageAvailable(outputPath); // callback func that check if thumbnail that user want one like it exists before or not

      //4th step  create our image as requirement here I will use
      // cal back of our main func it will count every all of that input above and will process our inputs to make our customize thumbnail images
      await resizeImage({
        inputPath,
        outputPath,
        width,
        height,
        thumbnail,
        oringimage,
        outputDir,
      });

      // after image processing we will make sure to send that output image to the user
      return res.status(200).sendFile(outputPath); //response will send thumbnail image to the user
    } else {
      res.status(404).send('Error Input Format');
      return;
    }
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
};

export default imageResize;
