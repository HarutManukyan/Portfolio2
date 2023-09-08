const translations = {
    en: {
        aboutMe: "Hello, I'm Harut, a 19-year-old web developer from Armenia. With international education, I've become proficient in JavaScript, React.js, HTML, and CSS. My diverse background includes Java as well. Beyond coding, I have practical experience in business management and teamwork. This experience has taught me effective communication, strategic planning, and collaboration. I'm passionate about creating user-centric solutions and continuously exploring new technologies. My goal is to contribute to exciting projects and collaborate with innovative teams.",
        skills: "Skills\n\nBusiness Acumen: My hands-on experience in managing multiple businesses has honed my skills in leadership, teamwork, and effective communication. Adaptability: I thrive on challenges and eagerly embrace new technologies, continually expanding my skill set. Creative Problem-Solving: Whether in code or real life, I relish tackling complex issues with innovative solutions. Eager Learner: I have a relentless appetite for learning, always seeking ways to improve and stay ahead in the ever-evolving tech landscape. Team Player: My collaborative nature ensures I'm an asset in group endeavors, fostering a harmonious and productive work environment. This combination of professional and personal skills allows me to approach projects with a well-rounded perspective, aiming for excellence in every endeavor.",
        schoolYearEN: "M. Gorky Russian School",
        aboutMeTitle: "ABOUT ME",
        collegeYearEN: "Yerevan State College of Humanities",
        courseYearEN: "ACA JavaScript and ReactJS course",
        javaCourseYearEN: "The Mascc Java and Spring course",
        skill1: "My hands-on experience in managing multiple businesses has honed my skills in leadership, teamwork, and effective communication.",
        skill2: "I thrive on challenges and eagerly embrace new technologies, continually expanding my skill set.",
        skill3: "Whether in code or real life, I relish tackling complex issues with innovative solutions.",
        skill4: "I have a relentless appetite for learning, always seeking ways to improve and stay ahead in the ever-evolving tech landscape.",
        skill5: "My collaborative nature ensures I'm an asset in group endeavors, fostering a harmonious and productive work environment.",
        skill: "This combination of professional and personal skills allows me to approach projects with a well-rounded perspective, aiming for excellence in every endeavor.",
        aboutMe1: "Hello, I'm Harut, a 19-year-old web developer from Armenia. With international education, I've become proficient in JavaScript, React.js, HTML, and CSS. My diverse background includes Java as well.",
        aboutMe2: "Beyond coding, I have practical experience in business management and teamwork. This experience has taught me effective communication, strategic planning, and collaboration.",
        aboutMe3: "I'm passionate about creating user-centric solutions and continuously exploring new technologies. My goal is to contribute to exciting projects and collaborate with innovative teams.",
    },
    ru: {
        aboutMe: "Привет, я Aрут, 19-летний веб-разработчик из Армении. Я владею JavaScript, React.js, HTML и CSS. Мои навыки также включают Java. Помимо программирования, у меня есть практический опыт в управлении бизнесом и работе в команде. Этот опыт научил меня эффективной коммуникации, стратегическому планированию и сотрудничеству. Я вдохновляюсь созданием решений, ориентированных на пользователя, и постоянно исследую новые технологии. Моя цель - внести вклад в увлекательные проекты и сотрудничать с инновационными командами.",
        skills: "Навыки\n\nБизнес-навыки: Мой практический опыт управления несколькими бизнесами научил меня лидерству, работе в команде и эффективной коммуникации. Адаптивность: Я процветаю в условиях вызовов и с увлечением встречаю новые технологии, постоянно расширяя свой набор навыков. Творческое решение проблем: Будь то в коде или в реальной жизни, мне нравится решать сложные задачи с инновационными решениями. Стремление к обучению: У меня бесконечное желание учиться и всегда искать пути улучшения и оставаться на шаг впереди в постоянно меняющейся технологической среде. Командный игрок: Моя склонность к сотрудничеству гарантирует, что я являюсь ценным активом в групповых усилиях, способствуя гармоничной и продуктивной рабочей среде. Это сочетание профессиональных и личных навыков позволяет мне подходить к проектам с всесторонней перспективой, стремясь к совершенству в каждом начинании.",
        schoolYearEN: "Школа имени М. Горького",
        aboutMeTitle: "ОБО МНЕ",
        collegeYearEN: "Ереванский Государственный Гуманитарный Колледж",
        courseYearEN: "Курс ACA по JavaScript и ReactJS",
        javaCourseYearEN: "The Mascc Java и Spring курс",
        skill1: "Мой практический опыт управления несколькими предприятиями отточил мои навыки лидерства, командной работы и эффективного общения.",
        skill2: "Я преуспеваю в решении сложных задач и с радостью осваиваю новые технологии, постоянно расширяя свой набор навыков.",
        skill3: "Будь то код или реальная жизнь, мне нравится решать сложные проблемы с помощью инновационных решений.",
        skill4: "У меня неустанный аппетит к обучению, я всегда ищу способы совершенствоваться и оставаться впереди в постоянно развивающемся технологическом ландшафте.",
        skill5: "Моя склонность к сотрудничеству гарантирует, что я являюсь ценным активом в групповых усилиях, способствуя созданию гармоничной и продуктивной рабочей среды.",
        skill: "Такое сочетание профессиональных и личных навыков позволяет мне подходить к проектам всесторонне, стремясь к совершенству в каждом начинании.",
        aboutMe1: "Здравствуйте, я Арут, 19-летний веб-разработчик из Армении. Получив международное образование, я стал владеть JavaScript, React.js, HTML и CSS. Мой разнообразный опыт включает также Java.",
        aboutMe2: "Помимо программирования, у меня есть практический опыт управления бизнесом и командной работы. Этот опыт научил меня эффективному общению, стратегическому планированию и сотрудничеству.",
        aboutMe3: "Я увлечен созданием ориентированных на пользователя решений и постоянным изучением новых технологий. Моя цель — участвовать в интересных проектах и сотрудничать с инновационными командами.",
    }
};

function updateContent(language) {
    const elementsToTranslate = document.querySelectorAll('.translation');
    
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-translation-key');
        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });
}

document.getElementById('language-toggle').addEventListener('change', function() {
    const selectedLanguage = this.checked ? 'ru' : 'en';
    updateContent(selectedLanguage);
});
