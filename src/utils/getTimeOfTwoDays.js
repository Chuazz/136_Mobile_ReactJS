import DateDiff from 'date-diff';

function getTimeOfComment(firstDate, secondDate) {
    var date1 = new Date(secondDate); // 2015-12-1
    var date2 = new Date(firstDate); // 2014-01-1

    var diff = new DateDiff(date1, date2);

    var time = [
        {
            name: 'năm',
            value: Math.floor(diff.years()),
        },
        {
            name: 'tháng',
            value: Math.floor(diff.months()),
        },
        {
            name: 'tuần',
            value: Math.floor(diff.weeks()),
        },
        {
            name: 'ngày',
            value: Math.floor(diff.days()),
        },
        {
            name: 'giờ',
            max: 24,
            value: Math.floor(diff.hours()),
        },
        {
            name: 'phút',
            max: 60,
            value: Math.floor(diff.minutes()),
        },
        {
            name: 'giây',
            max: 60,
            value: Math.floor(diff.seconds()),
        },
    ];

    const result = time.find((t) => {
        if (t.max) {
            return t.value > 0 && t.value <= t.max;
        }
        return t.value > 0;
    });

    return result.value + ' ' + result.name;
}

export default getTimeOfComment;
