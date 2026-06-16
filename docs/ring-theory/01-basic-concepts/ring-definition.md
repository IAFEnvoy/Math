---
sidebar_position: 2
---

# 环的定义与基本性质

环是具有两种二元运算（加法和乘法）的代数结构。整数的加法和乘法是环的"原型"。

## 环的定义

一个**环** $(R, +, \cdot)$ 是一个非空集合 $R$，其上定义了两种二元运算 $+$ 和 $\cdot$（分别称为加法和乘法），满足以下公理：

### 加法公理

1. **结合律**：$(a + b) + c = a + (b + c)$，$\forall a, b, c \in R$
2. **交换律**：$a + b = b + a$，$\forall a, b \in R$
3. **零元存在**：$\exists 0 \in R$，使 $a + 0 = a$，$\forall a \in R$
4. **负元存在**：$\forall a \in R$，$\exists -a \in R$，使 $a + (-a) = 0$

即 $(R, +)$ 是一个**交换群**（Abel 群）。

### 乘法公理

5. **结合律**：$(a \cdot b) \cdot c = a \cdot (b \cdot c)$，$\forall a, b, c \in R$

### 分配律

6. **左分配律**：$a \cdot (b + c) = a \cdot b + a \cdot c$，$\forall a, b, c \in R$
7. **右分配律**：$(a + b) \cdot c = a \cdot c + b \cdot c$，$\forall a, b, c \in R$

通常省略乘号，将 $a \cdot b$ 简写为 $ab$。

## 环的分类

| 环的类型 | 额外条件 |
|---|---|
| **含幺环** | $\exists 1 \in R, 1 \neq 0$，使 $1 \cdot a = a \cdot 1 = a$，$\forall a \in R$ |
| **交换环** | $ab = ba$，$\forall a, b \in R$ |
| **整环** | 交换、含幺、且无零因子（$ab = 0 \Rightarrow a = 0$ 或 $b = 0$） |
| **除环** | 含幺、且 $\forall a \neq 0$，$\exists a^{-1} \in R$ 使 $aa^{-1} = a^{-1}a = 1$ |
| **域** | 交换的除环（等价于：交换、含幺、且非零元均可逆） |

## 零因子与可逆元

### 零因子

设 $a \in R$，$a \neq 0$。若 $\exists b \in R, b \neq 0$，使 $ab = 0$（或 $ba = 0$），则称 $a$ 为 $R$ 的**左零因子**（或**右零因子**）。

- 整环的等价定义：交换环 $R \neq \{0\}$ 且 $R$ 无零因子
- 零因子不可逆

### 可逆元（单位）

若 $\exists b \in R$ 使 $ab = ba = 1$，则称 $a$ 为 $R$ 的**可逆元**（或**单位**），记 $b = a^{-1}$。

$R$ 中全体可逆元构成乘法群，记作 $R^{\times}$ 或 $U(R)$。

## 环的基本性质

1. **$0 \cdot a = a \cdot 0 = 0$**：零元乘以任何元均为零
2. **$(-a)b = a(-b) = -(ab)$**
3. **$(-a)(-b) = ab$**
4. **消去律不一定成立**：$ab = ac$ 且 $a \neq 0$ 不能推出 $b = c$，除非 $R$ 是整环且 $a \neq 0$
5. **二项式定理**在交换环中成立

## 环的同态与同构

环同态是保持两种运算的映射：

$$\varphi(a + b) = \varphi(a) + \varphi(b), \quad \varphi(ab) = \varphi(a)\varphi(b)$$

详见[环同态](../03-homomorphism/)章节。

## 常见例子

| 环 | 类型 | 说明 |
|---|---|---|
| $\mathbb{Z}$ | 整环 | 整数环，不是域 |
| $\mathbb{Q}, \mathbb{R}, \mathbb{C}$ | 域 | 全体非零元可逆 |
| $\mathbb{Z}_n$（$n$ 合数） | 含幺交换环 | 有零因子，如 $\bar{2} \cdot \bar{3} = \bar{0}$ 在 $\mathbb{Z}_6$ 中 |
| $\mathbb{Z}_p$（$p$ 素数） | 域 | 模 $p$ 剩余类域 |
| $\mathbb{H}$（四元数） | 除环（非交换） | 非交换除环的经典例子 |
| $M_n(R)$ | 非交换环 | $n$ 阶矩阵环（$n \geq 2$） |
| $R[x]$ | 取决于 $R$ | 多项式环 |
