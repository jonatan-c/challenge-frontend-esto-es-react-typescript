


export const getInitLetters = (projectManager: string) => {
    const letters = projectManager.split(' ')
        .map(word => word[0])
        .join('');
    return letters.toUpperCase();
}
 
