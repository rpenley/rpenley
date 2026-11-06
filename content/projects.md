---
title: Projects · Ryne Penley
description: A selection of projects ranging from practical tools to slightly unhinged experiments
---

# Projects
A selection of projects ranging from practical tools to slightly unhinged experiments.

## [Ziggy](https://github.com/rpenley/ziggy)
Ziggy is my static site generator written in Zig. It reads Markdown with front matter, renders it with the wonderful `zmd` library, and uses Mustache templates to produce plain static HTML. This site is built with Ziggy!

## [Nisse](https://github.com/rpenley/nisse)
I'm a longtime fan of tabletop and trading card games like Catan and MTG, and I've watched a lot of great local shops struggle with POS and ERP systems that are too expensive and too complex for the way card shops actually operate. Nisse is a free and open-source ERP and point-of-sale system for small businesses that tries to solve that problem. It uses Rust, Axum, PostgreSQL, Redis, and Next.js to handle inventory, sales, customers, events, and more, with a strong focus on being straightforward and usable.

## [llm-mddocgen](https://github.com/rpenley/llm-mddocgen)
A Markdown-driven document generation pipeline for OpenAI-compatible models. It treats prompts, personas, templates, and source material as composable building blocks for more reliable LLM document generation. It's particularly useful for research-heavy workflows and works well alongside an Obsidian vault.

## [labrodor](https://github.com/rpenley/labrodor)
`labrodor` is a Pulumi and TypeScript skeleton for standing up a practical homelab on top of a clean Proxmox VE install. It starts with an interactive questionnaire, generates typed Pulumi stack config, and then composes opinionated building blocks like storage, Pi-hole, and development-oriented hosts. It's intentionally a skeleton rather than a finished platform, meant to give me a solid base for iterating on the homelab topology I actually want.

## [FocusPocus](https://github.com/rpenley/focuspocus)
There's a running joke that every developer builds a to-do app, but there's a good reason for that: most of them are wildly complex and, for some reason, cost $10 a month. I built FocusPocus as a free and open-source productivity toolkit with Nuxt 3 that combines task management, calendar scheduling, time tracking, and notes in a single SQLite-backed application. The goal is to keep the daily planning loop simple: see what matters, schedule it, track the time you actually spend, and keep notes close to the work. It should do as much or as little as you need without becoming one more tool you have to learn.

## [Infinite Jest](https://github.com/rpenley/infinite-jest)
Infinite Jest is an intrusive thought that I took too far: a multi-persona debate engine for local LLMs that maintains a persistent thinking document and produces a final synthesis from the discussion. It has a Go backend and a web interface that feels a bit like an IRC chat room full of deeply frustrating Jungian personalities. It's useful for stress-testing ideas, and I get about as much value from watching it work as I do from watching it fail in entertaining ways.

## [50cc](https://github.com/rpenley/50cc)
A minimalist 2D game engine sandbox implemented as a single `stb`-style C99 header with SDL3 as the only dependency. The focus is small scope, readability, and learning through direct modification. It also includes sample games built on top of the header.

## [libgame](https://github.com/rpenley/libgame)
A small C `stb`-style single-header library for tabletop-style games, mostly card games like poker, blackjack, and hearts. It can also be used to build any game with win/loss outcomes that can be ranked with Elo, including chess. The repo includes the core library along with playable example implementations.

## [Bongo](https://github.com/rpenley/bongo)
A simple Go and MongoDB starter template for getting personal projects off the ground without overcomplicating them. It stands for **B**ootstrap m**on**go **go**lang.

## [Dotfiles](https://github.com/rpenley/dotfiles)
It's a stretch to call this a project, but I work across Windows, Linux, and macOS and have accumulated enough terminal, editor, and utility configuration to make it one anyway. It captures the practical defaults I actually use across systems, mostly so I can clone it when I need to provision a new machine. It's opinionated, but I like to think it's opinionated for good reasons.

## [Divinator](https://github.com/rpenley/divinator)
Long before modern AI tooling, I was fascinated by natural language processing problems, and one of my favorite things to build was Markov chain text generation. Divinator takes in source text and generates something that feels adjacent to it, almost like scrying by way of probability. Try it with some text from Project Gutenberg and see what falls out.

## [Thoth](https://github.com/rpenley/thoth)
A general-purpose, single-threaded, high-performance in-memory key-value store in C with some eventual consistency guarantees. This one exists largely for my own education and is probably not what you want in a real-world production system, but it's perfectly reasonable for personal projects that need a simple in-memory store.
