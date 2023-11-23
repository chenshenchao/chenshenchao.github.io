<template>
    <center-part-page ref="$el" class="image-gird-page">
        <form-sheet class="image-info-pane" @submit.prevent>
            <form-row>
                <label>行数：</label>
                <form-number-input v-model="tool.imageGird.rowCount" :precision="0" />
                <label>列数：</label>
                <form-number-input v-model="tool.imageGird.columnCount" :precision="0" />
            </form-row>
            <form-row>
                <label>宽：</label>
                <form-number-input v-model="tool.imageGird.imageWidth" :precision="0" />
                <label>长：</label>
                <form-number-input v-model="tool.imageGird.imageHeight" :precision="0" />
            </form-row>
            <form-row>
                <form-text-button @click="onClickGenerate">生成</form-text-button>
            </form-row>
        </form-sheet>

        <div class="image-gird">
            <div v-for="(row, i) in data.cells" class="image-row">
                <div v-for="(url, j) in row" class="image-cell" @click="onClickCell(j, i)">
                    <img v-if="url" :src="url" />
                </div>
            </div>
            <input ref="$cellInput" accept="image/*" type="file" @input="onInputCell" style="display: none;" />
        </div>
        <div class="image-preview">
            <img v-if="data.imageTarget" class="image-target" alt="target" :src="data.imageTarget" />
        </div>
    </center-part-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref, watch, onMounted } from 'vue';
import { useToolStore } from '../../stores/ToolStore';
import CenterPartPage from '../../widgets/CenterPartPage.vue';

const $el = ref<InstanceType<typeof CenterPartPage> | null>();
const $cellInput = ref<HTMLInputElement>();

const tool = useToolStore();

const data: {
    imageTarget?: string,
    cells: (string | null)[][],
    cellX?: number,
    cellY?: number,
} = reactive({
    cells: [],
    cellX: undefined,
    cellY: undefined,
});

const getCell = (x: number, y: number) => {
    const row = data.cells[y];
    if (row) {
        return row[x];
    }
    return null;
}

const resizeCell = (width: number, height: number) => {
    $el.value?.$el?.style.setProperty('--cell-width', `${width}px`);
    $el.value?.$el?.style.setProperty('--cell-height', `${height}px`);
};

const resizeCells = (rowCount: number, columnCount: number) => {
    const gird = [];
    for (let i = 0; i < rowCount; ++i) {
        const row = [];
        for (let j = 0; j < columnCount; ++j) {
            row.push(getCell(j, i));
        }
        gird.push(row);
    }
    data.cells = gird;
};

onBeforeMount(() => {
    resizeCells(tool.imageGird.rowCount, tool.imageGird.columnCount);
});

onMounted(() => {
    resizeCell(tool.imageGird.imageWidth, tool.imageGird.imageHeight);
});

watch(() => [tool.imageGird.rowCount, tool.imageGird.columnCount], ([rowCount, columnCount]) => {
    resizeCells(rowCount, columnCount);
});

watch(() => [tool.imageGird.imageWidth, tool.imageGird.imageHeight], ([imageWidth, imageHeight]) => {
    resizeCell(imageWidth, imageHeight);
});



const onClickCell = (x: number, y: number) => {
    data.cellX = x;
    data.cellY = y;
    $cellInput.value?.click();
};

const onClickGenerate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = tool.imageGird.imageWidth * tool.imageGird.columnCount;
    canvas.height = tool.imageGird.imageHeight * tool.imageGird.rowCount;
    const context = canvas.getContext('2d');
    for (let i = 0; i < tool.imageGird.rowCount; ++i) {
        for (let j = 0; j < tool.imageGird.columnCount; ++j) {
            const url = data.cells[i][j];
            if (url) {
                const image = document.createElement('img');
                image.src = url;
                context?.drawImage(
                    image,
                    0, 0, image.width, image.height,
                    j * tool.imageGird.imageWidth,
                    i * tool.imageGird.imageHeight,
                    tool.imageGird.imageWidth,
                    tool.imageGird.imageHeight
                );
            }
        }
    }
    canvas.toBlob((b) => {
        if (data.imageTarget) {
            URL.revokeObjectURL(data.imageTarget);
        }
        data.imageTarget = URL.createObjectURL(b!);
    }, 'image/png', 0.9);
};

const onInputCell = (e: Event) => {
    const i = e.target as HTMLInputElement;
    const f = i.files![0];
    const x = data.cellX ?? 0;
    const y = data.cellY ?? 0;
    const url = data.cells[y][x];
    i.value = "";
    if (url) {
        URL.revokeObjectURL(url);
    }
    data.cells[y][x] = URL.createObjectURL(f);
};
</script>

<style scoped lang="scss">
.image-gird-page {
    --cell-width: 4em;
    --cell-height: 4em;

    .image-info-pane {
        background-color: white;
    }

    .image-gird {
        display: flex;
        flex-direction: column;
        border: 1px solid #dfdfdf;
        padding: .4em;
    }

    .image-row {
        display: flex;
        flex-direction: row;
    }

    .image-cell {
        width: var(--cell-width);
        height: var(--cell-height);
        border: 1px solid #dfdfdf;

        &>img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>