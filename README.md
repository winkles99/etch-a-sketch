# Etch-a-Sketch Grid Project

## Overview

This project creates a dynamic, interactive sketch pad built with HTML, CSS (Flexbox), and JavaScript. It generates a customizable grid of square divs that change color as you hover over them, simulating a pixelated drawing effect.

## Features

- **Dynamic Grid Creation:** Generates a grid of squares (default 16x16) inside a fixed 960x960 pixel container.
- **Flexbox Layout:** Uses Flexbox (not CSS Grid) to arrange squares evenly in rows and columns.
- **Hover Effect:** Squares change color when hovered over, leaving a trail like a drawing pen.
- **Resizeable Grid:** A button prompts users to input a new grid size (up to 100), clearing and generating a new grid that fits the same container size.
- **Random RGB Colors:** Squares change to a random color on each hover.

## Usage

1. Open `index.html` in your browser.
2. Use your mouse to hover over grid squares to draw.
3. Click the "Resize Grid" button to enter a new grid size.
4. Enter a number between 1 and 100 and press OK to generate a new grid.

## Technical Details

- **HTML:** Contains the container div and resize button.
- **CSS:** Uses Flexbox for the container and styles each square.
- **JavaScript:** Dynamically creates the grid squares, sets their size, and adds event listeners for hover effects and resizing.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.

