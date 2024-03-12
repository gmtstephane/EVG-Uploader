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
		const exstension = fileFile?.name.split('.').pop();
		let b = await file.arrayBuffer();
		let buffer = Buffer.from(b);

		await s3Client.putObject(
			{
				Bucket: 'evg-mathieu',
				Key: new Date().toISOString() + '.' + exstension,
				Body: buffer,
			},
			(err, data) => {
				if (err) {
					console.error('Error', err);
					return NextResponse.json({ message: 'Upload failed' }, { status: 500 });
				}
				console.log('Data', data);
			}
		);

		return NextResponse.json({ message: ' successful' });
	} catch (error) {
		console.log('error', error);
		return NextResponse.json({ message: 'Upload failed' }, { status: 500 });
	}
}
