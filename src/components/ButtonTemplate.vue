<template>
<button class="read-more-button">
    <span>READ MORE</span>
</button>
</template>
  
<style scoped>

.read-more-button {
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: var(--text-color); /* Color de fondo */
    color: var(--container-color); /* Color del texto */
    border: 3px solid var(--container-color);
    border-top: 0px;
    border-bottom: 0px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    overflow: hidden;
    transition: all 0.3s ease;
}

.read-more-button span {
    position: relative;
}

.read-more-button:hover {
    color: var(--text-color);
    background-color: var(--container-color)
}
</style>