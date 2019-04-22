<template>
    <div class="container">
        <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>
        <form>
            <div class="form-group mt-5">
                <label for="tisch">Tisch auswählen</label>
                <select class="form-control shadow" id="tisch" v-model="table">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
        </form>
        <tischAnsicht></tischAnsicht>
    </div>
</template>

<script>
import tischAnsicht from './TischAnsicht'
    export default {
        name: 'Tisch',
        data() {
            return {
                table: 1
            }
        },
        components: {
            tischAnsicht
        }
    }
</script>