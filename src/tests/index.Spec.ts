import path from 'path';
import imageAvailable, { checkdir } from '../utils/imgAvailability';
import resizeImage from '../utils/resizeimg';
//import supertest from 'supertest';
import app from '../index';
import request from 'supertest';
import fs from 'fs';
//const request = supertest(app);

describe('Testing GET / endpoint', () => {
  it('gets the api endpoint *** HOME PAGE**  return status code 200 status', async () => {
    const result = await request(app).get('').send();

    expect(result.status).toBe(200);
  });

  it('it should return status code 404 status. *** UNVALID image processing** If filename is not included', async () => {
    const result = await request(app)
      .get('/resize?name=fjor&w=200&h=200')
      .send();

    expect(result.status).not.toBe(200);
  });
  it('gets the RESIZE endpoint  VALID*** image processing** return status code 200 status', async () => {
    const result = await request(app)
      .get('/resize?name=fjord.jpg&w=200&h=200')
      .send();

    expect(result.status).toBe(200);
  });

  it('gets the test endpoint  returns "hello world 😀!"', async () => {
    const result = await request(app).get('/test').send();

    expect(result.text).toBe(`"hello world 😀!"`);
  });
});

//test url .req.query

//Test single image file

describe('images file validation', () => {
  afterAll(() => {
    // delet the thumbnail folder after testing
    fs.rmSync(path.join(__dirname, '..', '..', 'images', 'thumbnail'), {
      recursive: true,
    });
    console.log('done');
  });

  const width = 200;
  const height = 200;
  const name = 'fjord.jpg';
  const unvalidName = 'fjord.jpg';
  const thumbnailImage = `fjord_${width}_${height}.jpg`;
  //const unvalidThumbnail = `fjord_${width}_${height}.jpg`;
  const inputPath: string | path.PlatformPath = path.join(
    __dirname,
    '..',
    '..',
    'images',
    name
  );
  const outputPath: string | path.PlatformPath = path.join(
    __dirname,
    '..',
    '..',
    'images',
    'thumbnail',
    thumbnailImage
  );
  const outputDir: string | path.PlatformPath = path.join(
    __dirname,
    '..',
    '..',
    'images',
    'thumbnail'
  );
  const oringimage = imageAvailable(inputPath);
  const thumbnail = imageAvailable(outputPath);

  it('avilablitiy func if the Full image exist return true', async () => {
    const result: boolean = await imageAvailable(inputPath);
    expect(result).toEqual(true);
  });

  it('avilablitiy func if the Full image NOT exist return false', async () => {
    const result: boolean = await imageAvailable(unvalidName);
    expect(result).toBeFalsy();
    //expect(result).toEqual(false);
  });

  it('checkdir func if the THUMBNAIL FOLDER NOT exist return message or false', async () => {
    const result: undefined | void = await checkdir(outputDir);
    expect(result).toBe(
      console.log('thumbnail folder not found and will create it .....done')
    );
    expect(result).toBeFalsy();
  });

  it('****resize imag***** should run correctly on resizeImage function correctly', async () => {
    const result = await resizeImage({
      inputPath,
      outputPath,
      width,
      height,
      thumbnail,
      oringimage,
      outputDir,
    });
    expect(result).toBeTruthy();
  });

  it('imag avilablitiy func check on the thumbnail image  return true', async () => {
    const result: boolean = await imageAvailable(outputPath);
    expect(result).toEqual(true);
  });
});
