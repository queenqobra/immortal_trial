/* CSS styles for lower bracket connector lines */
.lower-bracket {
    position: relative;
}

.lower-bracket .loser {
    position: relative;
}

.lower-bracket .loser::after {
    content: '';
    position: absolute;
    top: 50%; /* Adjust based on your layout */
    left: 100%; /* Start from the right edge of the loser column */
    width: 2px; /* Width of the connector line */
    height: 100%; /* Height of the connector line */
    background: linear-gradient(to bottom, rgba(255, 0, 0, 0.5), rgba(255, 0, 0, 0)); /* Gradient effect */
    transform: translateY(-50%); /* Center the line vertically */
}

.lower-bracket .winner {
    position: relative;
}

.lower-bracket .winner::before {
    content: '';
    position: absolute;
    top: 50%; /* Adjust based on your layout */
    right: 100%; /* Start from the left edge of the winner column */
    width: 2px; /* Width of the connector line */
    height: 100%; /* Height of the connector line */
    background: linear-gradient(to bottom, rgba(0, 255, 0, 0.5), rgba(0, 255, 0, 0)); /* Gradient effect */
    transform: translateY(-50%); /* Center the line vertically */
}
