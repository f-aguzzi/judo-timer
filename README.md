# Judo Timer

This is a timer for the jury table at Judo competitions, to keep times
on the referee's behalf.

## Implemented functionalities

- adjustable timers
- automatic assignment of victory
- *osae komi* timer with automatic assignment of *waza ari* and *ippon*
- scoreboard to keep track of *waza ari*, *ippon* and *shido*
- automatic victory determination for:
	- end of time with score advantage
	- *ippon* or two *waza ari*
	- *kosoko make*


## Structure

The project is based on my template for React apps with TypeScript
and TailwindCSS support, which can be found at
[https://github.com/f-aguzzi/react-tailwind-typescript].

The package manager is `yarn`.

## Usage

This is a React project and can be used as such.
The dev server can be started with `yarn start` and the static version can be
built with `yarn build`.
