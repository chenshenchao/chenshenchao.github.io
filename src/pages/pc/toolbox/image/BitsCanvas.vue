<template>
    <div class="pc-image-bits-canvas">
        <div class="left-bar"></div>
        <canvas ref="canvasElement" @mousedown="onCanvasMouseDown" @mouseup="onCanvasMouseUp"
            @mousemove="onCanvasMouseMove"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { run } from '../../../../utils/scope';

const imageSize = ref({
    width: 64,
    height: 64,
});
const imageRatio = computed(() => imageSize.value.width / imageSize.value.height);

const canvasElement = ref<HTMLCanvasElement>();
const canvasWidth = computed(() => canvasElement.value?.offsetWidth ?? 1);
const canvasHeight = computed(() => canvasWidth.value / imageRatio.value);
const canvasContext = computed(() => canvasElement.value?.getContext('2d'));

const cellSize = computed(() => ({
    width: canvasWidth.value / imageSize.value.width,
    height: canvasHeight.value / imageSize.value.height,
}));

const penIsDown = ref(false);
const penColor = ref('#444');

const drawAlphaBg = () => {
    console.log('canvas', canvasElement.value, canvasContext.value);
    run(canvasContext.value, (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, canvasWidth.value, canvasHeight.value);
        ctx.fillStyle = '#4444';
        for (let i = 0; i < imageSize.value.width; ++i) {
            for (let j = 0; j < imageSize.value.height; ++j) {
                if ((i + j) % 2) {
                    const x = i * cellSize.value.width;
                    const y = j * cellSize.value.height;
                    ctx.fillRect(x, y, cellSize.value.width, cellSize.value.height);
                }
            }
        }
    });
}

const penDrawPixel = (x: number, y: number) => {
    run(canvasContext.value, (ctx) => {
        ctx.fillStyle = penColor.value;
        ctx.fillRect(
            x * cellSize.value.width,
            y * cellSize.value.height,
            cellSize.value.width + 1,
            cellSize.value.height + 1
        );
    });
}

const onCanvasMouseDown = (e: MouseEvent) => {
    penIsDown.value = true;
    const x = Math.floor(e.offsetX / cellSize.value.width);
    const y = Math.floor(e.offsetY / cellSize.value.height);
    console.log(e, x, y);
    penDrawPixel(x, y);
}

const onCanvasMouseMove = (e: MouseEvent) => {
    if (penIsDown.value) {
        const x = Math.floor(e.offsetX / cellSize.value.width);
        const y = Math.floor(e.offsetY / cellSize.value.height);
        console.log(e, x, y);
        penDrawPixel(x, y);
    }
}

const onCanvasMouseUp = (e: MouseEvent) => {
    console.log(e);
    penIsDown.value = false;
}

onMounted(() => {
    canvasElement.value!.width = canvasWidth.value;
    canvasElement.value!.height = canvasHeight.value;
    console.log('ratio', imageRatio.value, canvasWidth.value, canvasHeight.value);
    drawAlphaBg();
});
</script>

<style lang="scss" scoped>
.pc-image-bits-canvas {
    display: flex;
    flex-direction: row;

    .left-bar {
        width: 24vw;
    }

    canvas {
        flex-grow: 1;
        border: 1px solid #4444;
    }
}
</style>