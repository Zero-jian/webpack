<template>
    <div>
        <p>Hello dsadaaaasld</p>
        <span>{{text}}</span>
        <img src="./assets/images/sister.jpg" alt="">
        <audio autoplay="autoplay" controls>
            <source src="./assets/music/children.mp3">
        </audio>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: 'This is a text'
        }
    }
}
</script>