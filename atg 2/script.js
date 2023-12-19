
// gsap.registerPlugin(ScrollTrigger);


// const statusAnimation = (config) => {
//     gsap.to(config.class, {
//         opacity: 1,
//         y: 0,
//         scrollTrigger: {
//             trigger: config.trigger,
//             end: config.end,
//             start: config.start,
//             toggleActions: 'play reverse restart reset'
//         },
//     });
// }


// const bgAnimation = (config) => {
//     gsap.to(config.class, {
//         color: config.color,
//         backgroundColor: config.backgroundColor,
//         scrollTrigger: {
//             trigger: config.trigger,
//             end: config.end,
//             start: config.start,
//             toggleActions: 'restart pause restart pause'
//         },
//     });
// }


// const svgAnimation = (config) => {
//     gsap.to(config.class, {
//         strokeDasharray: `${config.strokeLength}, 1000`,
//         fill: config.fillColor,
//         scrollTrigger: {
//             trigger: config.trigger,
//             end: config.end,
//             start: config.start,
//             toggleActions: config.toggleActions
//         },
//     });
// }

// const runAnimations = (config) => {
//     bgAnimation({
//         class: '.slide',
//         trigger: config.trigger,
//         start: config.start,
//         end: config.end,
//         color: config.color,
//         backgroundColor: config.backgroundColor
//     });

//     config.classes.map(ele => statusAnimation({
//         class: ele,
//         trigger: config.trigger,
//         start: config.start,
//         end: config.end
//     }))

//     svgAnimation({
//         class: '.transrgwht',
//         strokeLength: config.strokeLength,
//         trigger: config.trigger,
//         start: config.start,
//         end: config.end,
//         toggleActions: 'restart pause restart pause'
//     })

//     svgAnimation({
//         class: config.svgDot,
//         trigger: config.trigger,
//         start: config.start,
//         end: config.end,
//         fillColor: 'blue',
//         toggleActions: 'play none none reset'
//     })
// }


// runAnimations({
//     classes: ['.d1', '.ad-1', '.cta-1', '.pic-1', '.pic-2', '.logo-1', '.dot-1',], svgDot:
//         '.dotsfill1', trigger:
//         '.slide-3', start:
//         'top 105%', end:
//         'top 50%', color:
//         '#6311A8', backgroundColor: '#CCCBCE', strokeLength:
//         0
// });

// runAnimations({
//     classes: ['.d2', '.ad-2', '.cta-2', '.pic-3', '.pic-4', '.dot-2'], svgDot:
//         '.dotsfill2', trigger:
//         '.slide-3', start:
//         'top 50%', end:
//         'top 0%', color:
//         '#4D27CD', backgroundColor:
//         '#1C0361', strokeLength: (140 * 1)
// });

// runAnimations({
//     classes: ['.d3', '.ad-3', '.cta-3', '.pic-14', '.pic-15', '.dot-3'], svgDot:
//         '.dotsfill3', trigger:
//         '.slide-6', start:
//         'top 100%', end:
//         'top -10%', color:
//         '#1a1a41', backgroundColor:
//         '#222255', strokeLength: (140 * 2)
// });


// runAnimations({
//     classes: ['.d4', '.ad-4', '.cta-4', '.pic-5', '.pic-6', '.pic-7', '.pic-8', '.pic-9', '.dot-4'], svgDot:
//         '.dotsfill4', trigger:
//         '.slide-4', start:
//         'top 100%', end:
//         'top 50%', color:
//         '#16263B', backgroundColor:
//         '#0D131B', strokeLength: (140 * 3)
// });


// runAnimations({
//     classes: ['.d5', '.ad-5', '.cta-5', '.pic-10', '.dot-5'], svgDot:
//         '.dotsfill5', trigger:
//         '.slide-4', start:
//         'top 50%', end:
//         'top 0%', color:
//         '#114AA1', backgroundColor:
//         '#36C5C9', strokeLength: (140 * 4)
// });


// runAnimations({
//     classes: ['.d6', '.ad-6', '.cta-6', '.pic-11', '.pic-12', '.logo-5', '.dot-6'], svgDot:
//         '.dotsfill6', trigger:
//         '.slide-5', start:
//         'top 100%', end:
//         'top 50%', color:
//         '#012C91', backgroundColor:
//         '#A18D7B', strokeLength: (140 * 5)
// });


// runAnimations({
//     classes: ['.d7', '.ad-7', '.cta-7', '.pic-16', '.pic-17', '.pic-18', '.pic-19', '.dot-7'], svgDot:
//         '.dotsfill7', trigger:
//         '.slide-5', start:
//         'top 50%', end:
//         'top 0%', color:
//         '#00834C', backgroundColor:
//         '#00B769', strokeLength: (140 * 6)
// });




gsap.registerPlugin(ScrollTrigger);

// info status animation goes here
const animate = (config) => {
    gsap.to(config.class, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: config.trigger,
            end: config.end,
            start: config.start,
            toggleActions: 'play reverse restart reset'
        },
    });
}

// for the background animation
const animateBg = (config) => {
    gsap.to(config.class, {
        color: config.color,
        backgroundColor: config.backgroundColor,
        scrollTrigger: {
            trigger: config.trigger,
            end: config.end,
            start: config.start,
            toggleActions: 'restart pause restart pause'
        },
    });
}

//svg path animation
const animateSvg = (config) => {
    gsap.to(config.class, {
        strokeDasharray: `${config.strokeLength}, 1000`,
        fill: config.fillColor,
        scrollTrigger: {
            trigger: config.trigger,
            end: config.end,
            start: config.start,
            toggleActions: config.toggleActions
        },
    });
}

const animateAll = (config) => {
    animateBg({
        class: '.slide',
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        color: config.color,
        backgroundColor: config.backgroundColor
    });

    config.classes.map(ele => animate({
        class: ele,
        trigger: config.trigger,
        start: config.start,
        end: config.end
    }))

    animateSvg({
        class: '.transrgwht',
        strokeLength: config.strokeLength,
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        toggleActions: 'restart pause restart pause'
    })

    animateSvg({
        class: config.svgDot,
        trigger: config.trigger,
        start: config.start,
        end: config.end,
        fillColor: 'blue',
        toggleActions: 'play none none reset'
    })
}


animateAll({
    classes: ['.d1', '.ad-1', '.cta-1', '.pic-1', '.pic-2', '.logo-1', '.dot-1'], svgDot:
        '.dotsfill1', trigger:
        '.slide-3', start:
        'top 105%', end:
        'top 50%', color:
        '#6311A8', backgroundColor:
        '#CCCBCE', strokeLength: 0
});


animateAll({
    classes: ['.d2', '.ad-2', '.cta-2', '.pic-3', '.pic-4', '.dot-2'], svgDot:
        '.dotsfill2', trigger:
        '.slide-3', start:
        'top 50%', end:
        'top 0%', color:
        '#4D27CD', backgroundColor:
        '#1C0361', strokeLength: (140 * 1)
});


animateAll({
    classes: ['.d3', '.ad-3', '.cta-3', '.pic-14', '.pic-15', '.dot-3'], svgDot:
        '.dotsfill3', trigger:
        '.slide-4', start:
        'top 100%', end:
        'top 50%', color:
        '#1a1a41', backgroundColor:
        '#222255', strokeLength: (140 * 2)
});


animateAll({
    classes: ['.d4', '.ad-4', '.cta-4', '.pic-5', '.pic-6', '.pic-7', '.pic-8', '.pic-9', '.dot-4'], svgDot:
        '.dotsfill4', trigger:
        '.slide-4', start:
        'top 50%', end:
        'top 0%', color:
        '#16263B', backgroundColor:
        '#0D131B', strokeLength: (140 * 3)
});


animateAll({
    classes: ['.d5', '.ad-5', '.cta-5', '.pic-10', '.dot-5'], svgDot:
        '.dotsfill5', trigger:
        '.slide-5', start:
        'top 100%', end:
        'top 50%', color:
        '#114AA1', backgroundColor:
        '#36C5C9', strokeLength: (140 * 4)
});


animateAll({
    classes: ['.d6', '.ad-6', '.cta-6', '.pic-11', '.pic-12', '.logo-5', '.dot-6'], svgDot:
        '.dotsfill6', trigger:
        '.slide-5', start:
        'top 50%', end:
        'top 0%', color:
        '#012C91', backgroundColor:
        '#A18D7B', strokeLength: (140 * 5)
});


animateAll({
    classes: ['.d7', '.ad-7', '.cta-7', '.pic-16', '.pic-17', '.pic-18', '.pic-19', '.dot-7'], svgDot:
        '.dotsfill7', trigger:
        '.slide-6', start:
        'top 100%', end:
        'top -10%', color:
        '#00834C', backgroundColor:
        '#00B769', strokeLength: (140 * 6)
});

