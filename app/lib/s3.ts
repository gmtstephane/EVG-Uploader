import AWS from 'aws-sdk';

const access = process.env.ACCESS_KEY_ID || '';
const secret = process.env.SECRET_ACCESS_KEY || '';

export const s3Client = new AWS.S3({
	endpoint: 'https://fra1.digitaloceanspaces.com',
	region: 'fra1',
	s3ForcePathStyle: false,
	credentials: {
		accessKeyId: access,
		secretAccessKey: secret,
	},
});

export function CountPhotos(): Promise<number> {
	return new Promise((resolve, reject) => {
		s3Client.listObjectsV2({ Bucket: 'evg-mathieu' }, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data.Contents?.length || 0);
			}
		});
	});
}
