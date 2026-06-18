---
sidebar_position: 3
---

# 环同构

## 定义

若环同态 $\varphi: R \to S$ 是**双射**，则称 $\varphi$ 为**环同构**（Ring Isomorphism），称 $R$ 与 $S$ **同构**，记作 $R \cong S$。

同构映射的逆映射也是环同构。

**直观理解**：同构的环具有**完全相同的环结构**，只是元素的"名字"不同。在环论中，同构的环被视为"本质上相同"。

## 同构的判定

### 单同态判定

$\varphi: R \to S$ 是单同态 $\iff$ $\ker \varphi = \{0_R\}$

### 同构判定

若 $\varphi: R \to S$ 是同态且存在同态 $\psi: S \to R$ 使 $\psi \circ \varphi = \operatorname{id}_R$ 且 $\varphi \circ \psi = \operatorname{id}_S$，则 $\varphi$ 是同构。

## 经典同构例子

### 1. 整数环的子环分类

$\mathbb{Z}$ 的任意子环形如 $n\mathbb{Z}$。$n\mathbb{Z} \cong \mathbb{Z}$（当 $n \neq 0$）：

$$\varphi: \mathbb{Z} \to n\mathbb{Z}, \quad \varphi(k) = nk$$

### 2. 复数与矩阵

复数域 $\mathbb{C}$ 同构于某些 $2 \times 2$ 实矩阵构成的环：

$$a + bi \longleftrightarrow \begin{pmatrix} a & -b \\ b & a \end{pmatrix}$$

### 3. Chinese Remainder Theorem（CRT）

若 $\gcd(m, n) = 1$，则：

$$\mathbb{Z}_{mn} \cong \mathbb{Z}_m \times \mathbb{Z}_n$$

这是环论版本的"中国剩余定理"。

### 4. 第一同构定理的应用

$$F[x] / (x - a) \cong F \quad \text{ via } \operatorname{ev}_a$$

$$F[x] / (x^2 + 1) \cong \mathbb{C} \quad \text{（当 } F = \mathbb{R} \text{ 时）}$$

## 自同构

环 $R$ 到自身的同构称为**自同构**（Automorphism）。全体自同构在复合下构成群 $\operatorname{Aut}(R)$。

### 经典例子

| 环 | 自同构群 | 说明 |
|---|---|---|
| $\mathbb{Q}$ | $\{\operatorname{id}\}$ | 只有平凡自同构 |
| $\mathbb{C}$ | 巨大（非可数） | 包含复共轭及大量"非连续"自同构 |
| $\mathbb{Z}$ | $\{\operatorname{id}\}$ | 只有平凡自同构 |
| $F[x]$（$F$ 域） | $f(x) \mapsto f(ax + b)$（$a \neq 0$） | 多项式环的仿射自同构 |

## 自同构与 Galois 群

域的 Galois 群 $\operatorname{Gal}(E/F)$ 定义为固定 $F$ 的 $E$ 的 $F$-自同构群。这是 Galois 理论的核心概念。
