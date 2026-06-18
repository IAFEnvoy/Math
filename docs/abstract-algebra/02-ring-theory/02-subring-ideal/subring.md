---
sidebar_position: 2
---

# 子环

## 定义

设 $(R, +, \cdot)$ 为环，$S \subseteq R$ 为非空子集。若 $S$ 在 $R$ 的加法和乘法下也构成环，则称 $S$ 为 $R$ 的**子环**，记作 $S \leqslant R$。

**与子群类比**：子环需对两种运算都封闭，而子群只需对一种运算封闭。子环首先必须是加法子群。

## 子环判定定理

### 判定定理

$S \subseteq R$ 是 $R$ 的子环当且仅当：

1. $S \neq \varnothing$
2. $\forall a, b \in S$，有 $a - b \in S$（即 $(S, +) \leqslant (R, +)$）
3. $\forall a, b \in S$，有 $ab \in S$（乘法封闭）

**注意**：含幺性不要求传递——子环的幺元（若有）不一定等于原环的幺元。例如 $2\mathbb{Z} \subseteq \mathbb{Z}$ 是子环但无幺元。

## 常见例子

| 子环 | 原环 | 说明 |
|---|---|---|
| $n\mathbb{Z}$ | $\mathbb{Z}$ | $n$ 的倍数 |
| $\mathbb{Z}$ | $\mathbb{Q}$ | 整数是有理数的子环 |
| $\mathbb{R}$ | $\mathbb{C}$ | 实数是复数的子环 |
| 对角矩阵全体 | $M_n(F)$ | $n$ 阶对角矩阵构成子环 |

## 子环的性质

1. **传递性**：若 $T \leqslant S$ 且 $S \leqslant R$，则 $T \leqslant R$
2. **交仍为子环**：子环的交集仍是子环
3. **并不一定**：子环的并集一般不构成子环

## 中心

环 $R$ 的**中心** $Z(R) = \{a \in R \mid \forall r \in R, ar = ra\}$ 是 $R$ 的交换子环。
