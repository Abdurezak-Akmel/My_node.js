try {
    const quo = 34/0;
} catch(error) {
    console.error("Error occured: ", error.message);
} finally {
    console.log("Execution finished.");
}
