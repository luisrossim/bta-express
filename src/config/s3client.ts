import { S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const bucketRegion = process.env.AWS_S3_BUCKET_REGION;
const bucketName = process.env.AWS_S3_BUCKET_NAME;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!bucketRegion || !bucketName || !accessKey || !secretAccessKey) {
  throw new Error('Erro ao carregar as variáveis de ambiente para aws-s3');
}

const client = new S3Client({
  region: bucketRegion,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretAccessKey
  }
})

export { client, bucketName, getSignedUrl };