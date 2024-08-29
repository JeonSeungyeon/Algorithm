function solution(order) {
    let totalCost = 0;

    order.forEach(item => {
        if (item === 'anything') {
            totalCost += 4500;
        } else if (item.includes('americano')) {
            totalCost += 4500;
        } else if (item.includes('cafelatte')) {
            totalCost += 5000;
        }
    });

    return totalCost;
}
