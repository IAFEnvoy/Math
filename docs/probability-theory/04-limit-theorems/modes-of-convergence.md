---
sidebar_position: 2
---

# 两种收敛性

随机变量的收敛有多种模式。概率论中最重要的是**依概率收敛**（大数定律的基础）和**按分布收敛**（中心极限定理的基础）。

## 依概率收敛

### 定义

随机变量序列 $\{X_n\}$ **依概率收敛**到 $X$（记作 $X_n \xrightarrow{P} X$），若对任意 $\varepsilon > 0$：

$$\lim_{n \to \infty} P(|X_n - X| \geq \varepsilon) = 0$$

等价地：$\lim_{n \to \infty} P(|X_n - X| < \varepsilon) = 1$。

### 直观理解

当 $n$ 足够大时，$X_n$ 与 $X$ 的偏差超过任意小正数 $\varepsilon$ 的概率趋近于零。

### 弱大数定律

依概率收敛是大数定律（弱形式）的语言——样本均值**依概率收敛**到总体均值。

## 按分布收敛（弱收敛）

### 定义

随机变量序列 $\{X_n\}$ **按分布收敛**（弱收敛）到 $X$（记作 $X_n \xrightarrow{d} X$），若其分布函数 $F_n$ 满足：

$$\lim_{n \to \infty} F_n(x) = F(x)$$

对 $F$ 的每个连续点 $x$ 成立。

### 直观理解

**分布函数**收敛，而不是随机变量本身收敛。$X_n$ 和 $X$ 甚至不需要定义在同一个概率空间上。

### 中心极限定理

按分布收敛是中心极限定理的语言——标准化部分和的**分布函数**收敛到标准正态分布函数。

## 两种收敛的关系

> **依概率收敛 $\Rightarrow$ 按分布收敛**。反之不一定成立。

特例：若 $X \equiv c$（常数），则按分布收敛到 $c$ 等价于依概率收敛到 $c$。

## 几乎必然收敛（补充）

$X_n$ **几乎必然收敛**到 $X$（记作 $X_n \xrightarrow{a.s.} X$），若：

$$P\!\left(\lim_{n \to \infty} X_n = X\right) = 1$$

几乎必然收敛是"以概率 1 逐点收敛"，比依概率收敛更强。

### 收敛性强度排序

$$\text{几乎必然收敛} \;\Longrightarrow\; \text{依概率收敛} \;\Longrightarrow\; \text{按分布收敛}$$

## 依概率收敛的性质

1. 若 $X_n \xrightarrow{P} X$，$Y_n \xrightarrow{P} Y$，则：
   - $X_n + Y_n \xrightarrow{P} X + Y$
   - $X_n Y_n \xrightarrow{P} XY$
   - 若 $P(Y = 0) = 0$，则 $X_n / Y_n \xrightarrow{P} X / Y$

2. 若 $g$ 连续，$X_n \xrightarrow{P} X \Rightarrow g(X_n) \xrightarrow{P} g(X)$（连续映射定理）

## 按分布收敛的等价刻画

以下条件等价于 $X_n \xrightarrow{d} X$：

1. $F_n(x) \to F(x)$ 在 $F$ 的连续点上
2. 对任意有界连续函数 $g$：$E[g(X_n)] \to E[g(X)]$
3. 特征函数收敛：$\varphi_{X_n}(t) \to \varphi_X(t)$，$\forall t$（Lévy 连续性定理）

**特征函数法是证明中心极限定理的核心工具**。
