<template>
    <center-part-page class="image-gird-page">
        <form-sheet class="image-info-pane">
            <form-row>
                <label>行数：</label>
                <form-number-input v-model="data.rowCount" :precision="0" />
                <label>列数：</label>
                <form-number-input v-model="data.columnCount" :precision="0" />
            </form-row>
            <form-row>
                <label>宽：</label>
                <form-number-input v-model="data.imageWidth" :precision="0" />
                <label>长：</label>
                <form-number-input v-model="data.imageHeight" :precision="0" />
            </form-row>
        </form-sheet>

        <div class="image-gird">
            <div v-for="row in data.cells" class="image-row">
                <div v-for="url in row" class="image-cell">
                    <img v-if="url" :src="url" />
                </div>
            </div>
        </div>
    </center-part-page>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, watch } from 'vue';

const data: {
    rowCount: number,
    columnCount: number,
    imageWidth: number,
    imageHeight: number,
    cells: (string | null)[][],
} = reactive({
    rowCount: 4,
    columnCount: 4,
    imageWidth: 64,
    imageHeight: 64,
    cells: [],
});

const getCell = (x: number, y: number) => {
    const row = data.cells[y];
    if (row) {
        return row[x];
    }
    return null;
}

const resizeCells = (rowCount: number, columnCount: number) => {
    console.log('resizeCells', rowCount, columnCount);

    const gird = [];
    for (let i = 0; i < rowCount; ++i) {
        const row = [];
        for (let j = 0; j < columnCount; ++j) {
            row.push(getCell(j, i));
        }
        gird.push(row);
    }

    data.cells = gird;

    console.log(data.cells);
};

onBeforeMount(() => {
    resizeCells(data.rowCount, data.columnCount);
});

watch(() => [data.rowCount, data.columnCount], ([rowCount, columnCount]) => {
    resizeCells(rowCount, columnCount);
});

</script>

<style scoped lang="scss">
.image-gird-page {
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
        width: 4em;
        height: 4em;
        border: 1px solid #dfdfdf;
    }
}
</style>