import AWS from './awsConfig';

const s3 = new AWS.S3();

export const uploadEmailToS3 = async (email) => {
  const bucketName = 'quest-emails';
  const key = `emails/${email}`;
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: email,
    ContentType: 'text/plain',
  };

  try {
    await s3.putObject(params).promise();
    console.log(`Successfully uploaded email: ${email}`);
  } catch (error) {
    console.error(`Error uploading email: ${error}`);
  }
};
