const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return (
    <>
      {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                Great job! You've completed {completedTaskCount} task
                {completedTaskCount > 1 ? "s" : ""}
                {activeTaskCount > 0 &&
                  `, only ${activeTaskCount} more to go!`}
              </>
            )}

            {completedTaskCount === 0 && activeTaskCount > 0 && (
              <>Let's start working on {activeTaskCount} task{activeTaskCount > 1 ? "s" : ""}!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
