<template>
    <div class="container">
        <button type="button" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">
            Copy!
        </button>
    </div>
</template>

<script>
export default {
    setup() {
        const message = 'Hello Clipboard!'
        const onCopy = (e) => {
            alert('You just copied: ' + e.text)
        }
        const onError = (e) => {
            alert('Failed to copy texts')
        }

        return { message, onCopy, onError }
    },
}
</script>