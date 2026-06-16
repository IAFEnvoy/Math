---
sidebar_position: 3
---

# 整环

整环（Integral Domain）是整数环 $\mathbb{Z}$ 的最直接推广——交换、含幺、无零因子。在整环中，我们熟悉的"消去律"和"因式分解"等初等算术性质得以成立。

## 定义

设 $R$ 为交换含幺环，$R \neq \{0\}$。若 $R$ 满足：

$$ab = 0 \Longrightarrow a = 0 \ \text{或}\ b = 0$$

则称 $R$ 为**整环**。

**等价刻画**：整环 = 交换含幺环 + 消去律成立（$ab = ac, a \neq 0 \Rightarrow b = c$）

## 整环的基本性质

### 1. 消去律

在整环中，若 $a \neq 0$ 且 $ab = ac$，则 $b = c$。

> **证明**：$ab = ac \Rightarrow a(b - c) = 0$。因 $a \neq 0$ 且无零因子，故 $b - c = 0$，即 $b = c$。

### 2. 有限整环必为域

> **定理**：有限整环必为域。

**证明**：设 $R$ 为有限整环，$a \in R$，$a \neq 0$。考虑映射 $L_a: R \to R$，$L_a(x) = ax$。由消去律，$L_a$ 是单射。因 $R$ 有限，$L_a$ 也是满射，故 $\exists x \in R$ 使 $ax = 1$，$a$ 可逆。因此 $R$ 是域。

### 3. 子环与扩环

- 整环的子环仍是整环（若保持含幺性）
- $\mathbb{Z}$ 是"最小"的整环：任意整环都包含一个同构于 $\mathbb{Z}$ 或 $\mathbb{Z}_p$ 的子环（其特征子环）

## 不可约元与素元

在整环中可讨论因式分解：

| 概念 | 定义 |
|---|---|
| **整除** | $a \mid b \iff \exists c \in R, b = ac$ |
| **相伴** | $a \sim b \iff a \mid b$ 且 $b \mid a$，即 $b = ua$（$u$ 可逆） |
| **不可约元** | $p \neq 0$ 不可逆，且 $p = ab \Rightarrow a$ 可逆或 $b$ 可逆 |
| **素元** | $p \neq 0$ 不可逆，且 $p \mid ab \Rightarrow p \mid a$ 或 $p \mid b$ |

**素元 vs 不可约元**：素元必为不可约元，但反之不一定成立。在唯一分解整环（UFD）中，两者等价。

## 常见整环例子

| 整环 | 说明 |
|---|---|
| $\mathbb{Z}$ | 整数环，所有整环的"原型" |
| $\mathbb{Z}[i]$ | 高斯整数环（Gauss 整数） |
| $F[x]$（$F$ 为域） | 域上的一元多项式环 |
| $\mathbb{Z}[\sqrt{-5}]$ | 非 UFD 的经典例子 |
| $\mathbb{Z}_p$（$p$ 素数） | 有限整环，从而为域 |

## 整环的分式域

任意整环可嵌入一个域——其**分式域**（Field of Fractions）。分式域是"最经济的域化"构造，详见[分式域](../07-field-of-fractions/)章节。

例如：
- $\mathbb{Q} = \operatorname{Frac}(\mathbb{Z})$
- $F(x) = \operatorname{Frac}(F[x])$
