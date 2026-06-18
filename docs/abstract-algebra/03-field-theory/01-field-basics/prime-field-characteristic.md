---
sidebar_position: 2
---

# 素域与特征

## 域的特征

### 定义

设 $F$ 为域。考虑映射 $\psi: \mathbb{Z} \to F$，$\psi(n) = n \cdot 1_F$。$\ker \psi$ 是 $\mathbb{Z}$ 的理想，故 $\ker \psi = (m)$。定义 $F$ 的**特征**：

$$\operatorname{char}(F) = \begin{cases} 0 & \text{若 } \ker \psi = \{0\} \\ m & \text{若 } \ker \psi = (m), m > 0 \end{cases}$$

### 特征必为 $0$ 或素数

> **定理**：域的特征只能是 $0$ 或素数。

**证明**：若 $\operatorname{char}(F) = n = n_1 n_2$（合数），则 $(n_1 \cdot 1)(n_2 \cdot 1) = n \cdot 1 = 0$。在域中无零因子，必有 $n_1 \cdot 1 = 0$ 或 $n_2 \cdot 1 = 0$，与 $n$ 的最小性矛盾。

## 素域

### 定义

域的**素域**（Prime Field）是其最小的子域——即所有子域的交。

### 素域的分类

| 特征 | 素域 | 同构于 |
|---|---|---|
| $0$ | $\{\frac{m \cdot 1}{n \cdot 1} \mid m, n \in \mathbb{Z}, n \neq 0\}$ | $\mathbb{Q}$ |
| $p$ | $\{0, 1, 2 \cdot 1, \ldots, (p-1) \cdot 1\}$ | $\mathbb{F}_p = \mathbb{Z}_p$ |

> **结论**：任何域都包含 $\mathbb{Q}$ 或 $\mathbb{F}_p$ 之一作为其素域。

### 素域的泛性质

设 $F$ 为任意域。存在唯一的环同态 $\iota: P \to F$（$P$ 为 $\mathbb{Q}$ 或 $\mathbb{F}_p$），且 $\iota$ 是单同态。因此可将 $P$ 视作 $F$ 的子域。

## Frobenius 同态

在特征 $p > 0$ 的域中，映射：

$$\operatorname{Fr}: F \to F, \quad \operatorname{Fr}(a) = a^p$$

是域同态（Frobenius 自同态）。这由二项式定理在特征 $p$ 时的简化得来：

$$(a + b)^p = a^p + b^p \quad (\text{在特征 } p \text{ 中})$$

Frobenius 自同态在有限域理论和代数数论中极为重要。

## 常见域的特征速查

| 域 | 特征 | 素域 |
|---|---|---|
| $\mathbb{Q}, \mathbb{R}, \mathbb{C}$ | $0$ | $\mathbb{Q}$ |
| $\mathbb{F}_p$ | $p$ | $\mathbb{F}_p$ 自身 |
| $\mathbb{F}_{p^n}$ | $p$ | $\mathbb{F}_p$ |
| $\mathbb{Q}(\sqrt{2})$ | $0$ | $\mathbb{Q}$ |
| $F(x)$（有理函数域） | 同 $F$ | 同 $F$ 的素域 |
