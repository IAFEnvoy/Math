---
sidebar_position: 1
---

# 特征与素域

每个环都有一个"特征"——它描述了加法群中元素的"阶"行为。对域而言，特征决定了其最小子域（素域）。

## 环的特征

### 定义

设 $R$ 为环。考虑映射 $\varphi: \mathbb{Z} \to R$，$\varphi(n) = n \cdot 1_R$（当 $R$ 含幺时）或更一般地 $\varphi(n)(r) = nr$。

$\ker \varphi$ 是 $\mathbb{Z}$ 的理想，故 $\ker \varphi = (m)$ 对某个 $m \geq 0$。定义 $R$ 的**特征** $\operatorname{char}(R)$ 为：

$$\operatorname{char}(R) = \begin{cases} m & \text{若 } \ker \varphi = (m), m > 0 \\ 0 & \text{若 } \ker \varphi = \{0\} \end{cases}$$

### 直观理解

- $\operatorname{char}(R) = 0$ 意味着 $n \cdot 1_R \neq 0$ 对所有 $n \geq 1$ 成立
- $\operatorname{char}(R) = n$ 意味着 $n \cdot 1_R = 0$，且 $n$ 是满足此条件的最小正整数

## 域的特征

> **定理**：域的特征只能是 $0$ 或素数。

**证明**：若 $\operatorname{char}(F) = n = n_1n_2$（合数），则 $(n_1 \cdot 1)(n_2 \cdot 1) = n \cdot 1 = 0$。在域中无零因子，必有 $n_1 \cdot 1 = 0$ 或 $n_2 \cdot 1 = 0$，与 $n$ 的最小性矛盾。故 $n$ 为素数。

## 素域

### 定义

域的**素域**（Prime Field）是其最小的子域——即所有子域的交。

### 分类

| 特征 | 素域 | 同构于 |
|---|---|---|
| $0$ | $\{m \cdot 1 / n \cdot 1 \mid m, n \in \mathbb{Z}, n \neq 0\}$ | $\mathbb{Q}$ |
| $p$ | $\{0, 1, 2 \cdot 1, \ldots, (p-1) \cdot 1\}$ | $\mathbb{F}_p = \mathbb{Z}_p$ |

> **结论**：任何域都包含 $\mathbb{Q}$ 或 $\mathbb{F}_p$ 之一作为其素域。

## 特征与环同态

由同态基本定理：

$$\mathbb{Z} / \ker \varphi \cong \operatorname{im} \varphi \subseteq R$$

- 若 $\operatorname{char}(R) = 0$：$\operatorname{im} \varphi \cong \mathbb{Z}$，$R$ 包含 $\mathbb{Z}$ 的同构像
- 若 $\operatorname{char}(R) = n$：$\operatorname{im} \varphi \cong \mathbb{Z}_n$，$R$ 包含 $\mathbb{Z}_n$ 的同构像

## 常见例子

| 环/域 | 特征 | 素域 |
|---|---|---|
| $\mathbb{Z}$ | $0$ | —（不是域） |
| $\mathbb{Q}, \mathbb{R}, \mathbb{C}$ | $0$ | $\mathbb{Q}$ |
| $\mathbb{Z}_n$ | $n$ | — |
| $\mathbb{F}_p$ | $p$ | $\mathbb{F}_p$ 自身 |
| $\mathbb{F}_{p^n}$ | $p$ | $\mathbb{F}_p$ |
| $F(x)$（$F$ 域） | 同 $F$ | 同 $F$ 的素域 |

## 特征在环论中的应用

1. **Frobenius 同态**：在特征 $p$ 的交换环中，$\operatorname{Fr}(a) = a^p$ 是环同态（Frobenius 自同态）。这是正特征域中极其重要的工具。
2. **有限域的分类**：有限域的特征必为素数 $p$，元素个数必为 $p^n$。
3. **线性代数**：域的特征决定了许多线性代数结论的成立与否（如 $\operatorname{char}(F) \neq 2$ 时二次型理论更简单）。
