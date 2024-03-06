export default function guardrail(mathFunction) {
    const queue = [];

    try {
        queue.push(mathFunction());
    } catch (err) {
        queue.push(STring(err));
    } finally {
        queue.push('Guardrail was processed');
    }

    return queue;
}