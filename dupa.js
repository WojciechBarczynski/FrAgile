function getArrowAngle(current_stand_position, current_stand_angle, next_stand_position) {
    const current_stand_unit_vector = {
        x: Math.cos(current_stand_angle),
        y: Math.sin(current_stand_angle)
    }

    const vector_between_stands = {
        x: (next_stand_position.x - current_stand_position.x),
        y: (next_stand_position.y - current_stand_position.y)
    }

    const angle_between_vectors =
        Math.atan2(vector_between_stands.y, vector_between_stands.x) -
        Math.atan2(current_stand_unit_vector.y, current_stand_unit_vector.x)

    return `${angle_between_vectors * 180 / Math.PI}deg`
}

console.log(getArrowAngle({ x: 1, y: 1 }, 3.14, { x: 5, y: 5 }))
console.log(getArrowAngle({ x: 5, y: 5 }, 0, { x: -2, y: -2 }))
console.log(getArrowAngle({ x: 5, y: 5 }, 3.14 / 2, { x: -2, y: -2 }))
