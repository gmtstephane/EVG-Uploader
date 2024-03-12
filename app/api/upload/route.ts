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

		// Use the promise form of putObject
		const data = await s3Client
			.putObject({
				Bucket: 'evg-mathieu',
				Key: `${new Date().toISOString()}.${extension}`,
				Body: buffer,
			})
			.promise();

		// Now, this line will only execute after the upload is complete
		console.log('Upload Success', data);
		return NextResponse.json({ message: 'Upload successful' });
	} catch (error) {
		console.error('Upload error', error);
		return NextResponse.json({ message: 'Upload failed' }, { status: 500 });
	}
}
