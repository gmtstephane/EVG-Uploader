import { s3Client } from '@/app/lib/s3';
import { NextResponse } from 'next/server';

export const dynamic = 'auto';

export async function POST(req: Request) {
	let formData = await req.formData();
	const file = formData.get('image') as Blob | null;

	if (!file) {
		return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
	}

	try {
		const fileFile = formData.get('image') as File | null;
		const extension = fileFile?.name.split('.').pop();
		let b = await file.arrayBuffer();
		let buffer = Buffer.from(b);

		// // Use the promise form of putObject
		const fileName = `${new Date().toISOString()}.${extension}`;

		await s3Client
			.putObject({
				Bucket: 'evg-mathieu',
				Key: fileName,
				Body: buffer,
			})
			.promise();

		// Now, this line will only execute after the upload is complete
		// console.log('Upload Success', data);

		// Generate a presigned URL for the uploaded image
		const signedUrlExpireSeconds = 60 * 60; // your expiration time in seconds, e.g., 5 minutes
		const presignedUrl = await s3Client.getSignedUrlPromise('getObject', {
			Bucket: 'evg-mathieu',
			Key: fileName,
			Expires: signedUrlExpireSeconds,
		});

		await postimgToDiscord(presignedUrl);
		return NextResponse.json({ message: 'Upload successful' });
	} catch (error) {
		console.error('Upload error', error);
		return NextResponse.json({ message: 'Upload failed' }, { status: 500 });
	}
}

async function postimgToDiscord(url: string) {
	console.log('postimgToDiscord');
	var discordUrl =
		'https://discord.com/api/webhooks/1217203758312980615/RGamRLIN73C598BVZa--tZ2vxYWJ6NQix_87Bgs6cfErPOGI8i3n66AMu41HS2-IRE5j';

	var payload = {
		content: 'Uploaded Photo',
		tts: false,
		embeds: [
			{
				id: 652627557,
				color: 2326507,
				fields: [],
				image: {
					url: url,
				},
			},
		],
		components: [],
		actions: {},
	};

	var params = {
		method: 'post',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(payload),
	};

	var response = await fetch(discordUrl, params);
	console.log(response.status);
}
