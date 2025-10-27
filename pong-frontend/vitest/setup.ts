// test/setup.ts
import { vi } from 'vitest';

export function mockWebSocket() { }

export function mockCanvas() {
    Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
        value: vi.fn(() => ({
            fillRect: vi.fn(),
            clearRect: vi.fn(),
            getImageData: vi.fn(() => ({ data: [] })),
            putImageData: vi.fn(),
            createImageData: vi.fn(),
            setTransform: vi.fn(),
            drawImage: vi.fn(),
            save: vi.fn(),
            fillText: vi.fn(),
            restore: vi.fn(),
            beginPath: vi.fn(),
            moveTo: vi.fn(),
            lineTo: vi.fn(),
            closePath: vi.fn(),
            stroke: vi.fn(),
            translate: vi.fn(),
            scale: vi.fn(),
            rotate: vi.fn(),
            arc: vi.fn(),
            fill: vi.fn(),
            measureText: vi.fn(() => ({ width: 0 })),
            strokeRect: vi.fn(),
            font: '',
        })),
    });

}

