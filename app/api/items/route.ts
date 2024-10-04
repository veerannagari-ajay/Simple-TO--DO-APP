import { NextResponse } from 'next/server';

interface Item {
    id: number;
    name: string;
}

// Start with an empty items array
let items: Item[] = [];

export async function GET() {
    return NextResponse.json(items);
}

export async function POST(request: Request) {
    const newItem: Item = await request.json();
    newItem.id = items.length + 1; // Simple ID assignment
    items.push(newItem);
    return NextResponse.json(newItem, { status: 201 });
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    items = items.filter(item => item.id !== id);
    return NextResponse.json({ message: 'Item deleted' });
}
