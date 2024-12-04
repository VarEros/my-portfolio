<template>
    <div class="flex skill-list">
        <div class="skill" v-for="skill in skills" :key="skill">
            <img :src="'/assets/languages/'+skill" :alt="skill" />
            <p>{{ skillsData.find((sk) => sk.image === skill).name }}</p>
        </div>
    </div>
</template>
<script>
import skillsData from '../assets/skills.json';

 export default {
    name: "SkillChip",
    props: {
        skills: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            skillsData
        }
    }
  };
</script>

<style scoped>
.skill-list {
    padding-top: 10px;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5vw;
}

.skill {
    font-family: 'Monserrat';
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
    padding: 0.3rem 0.7rem;
    background-color: var(--text-color);
    color: #FFF;
    border-radius: 20px;
}

.skill img {
    filter: brightness(1) grayscale(1);
    padding-bottom: 2px;
}
</style>